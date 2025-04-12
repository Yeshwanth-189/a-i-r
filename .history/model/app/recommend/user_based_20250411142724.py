import pandas as pd
from surprise import Dataset, Reader, KNNBasic
from surprise.model_selection import train_test_split

# Train User-Based KNN model
def train_user_based_model(df):
    reader = Reader(rating_scale=(1, 5))
    data = Dataset.load_from_df(df[['user_id', 'product_id', 'rating']], reader)
    trainset, _ = train_test_split(data, test_size=0.2)
    sim_options = {'name': 'cosine', 'user_based': True}
    model = KNNBasic(sim_options=sim_options)
    model.fit(trainset)
    return model

# Recommend top products for a user

def get_user_recommendations(user_id, df, model, top_n=10):
    if user_id not in df['user_id'].values:
        return {"error": "User ID not found in dataset."}

    user_categories = df[df['user_id'] == user_id]['category'].value_counts().index.tolist()
    all_products = df['product_id'].unique()
    rated_products = df[df['user_id'] == user_id]['product_id'].unique()
    unseen_products = [pid for pid in all_products if pid not in rated_products]
    unseen_df = df[df['product_id'].isin(unseen_products)]
    filtered_unseen_df = unseen_df[unseen_df['category'].isin(user_categories)].drop_duplicates('product_id')

    predictions = [model.predict(user_id, pid) for pid in filtered_unseen_df['product_id'].tolist()]
    top_predictions = sorted(predictions, key=lambda x: x.est, reverse=True)
    top_product_ids = [pred.iid for pred in top_predictions[:top_n]]

    recommended_df = df[df['product_id'].isin(top_product_ids)]
    recommended_df = recommended_df.drop_duplicates('product_id').sort_values(by='rating', ascending=False)

    return recommended_df[['product_id', 'product_name', 'category', 'rating']].to_dict(orient="records")
