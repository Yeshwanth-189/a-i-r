import pandas as pd
import joblib
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, "recommend", "user_knn_model.pkl")


# Train User-Based KNN model
def train_user_based_model(df):
    model = joblib.load(MODEL_PATH)
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
