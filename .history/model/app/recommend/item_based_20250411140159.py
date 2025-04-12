import numpy as np
import pandas as pd
from sklearn.decomposition import TruncatedSVD

# Train SVD + Build correlation matrix
def train_item_similarity_model(df):
    # Create user-item matrix
    ratings_matrix = df.pivot_table(values='rating', index='user_id', columns='product_id', fill_value=0)
    X = ratings_matrix.T

    # SVD
    SVD_model = TruncatedSVD(n_components=10)
    decomposed_matrix = SVD_model.fit_transform(X)

    # Correlation Matrix
    correlation_matrix = np.corrcoef(decomposed_matrix)

    return X, correlation_matrix

# Recommend similar products
def get_similar_products(product_id, df, X, correlation_matrix, threshold=0.9, top_n=10):
    product_list = list(X.index)

    if product_id not in product_list:
        return {"error": "Product ID not found."}

    product_index = product_list.index(product_id)
    correlation_scores = correlation_matrix[product_index]

    # Get product IDs with high similarity
    similar_ids = list(X.index[correlation_scores > threshold])

    if product_id in similar_ids:
        similar_ids.remove(product_id)

    similar_ids = similar_ids[:top_n]

    result_df = df[df['product_id'].isin(similar_ids)][['product_id', 'product_name']].drop_duplicates()

    return result_df.to_dict(orient="records")
