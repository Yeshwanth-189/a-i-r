from fastapi import FastAPI
import pandas as pd
from recommend.item_based import train_item_similarity_model, get_similar_products

app = FastAPI()

df = None
X = None
correlation_matrix = None

@app.on_event("startup")
def startup_event():
    global df, X, correlation_matrix
    print("🔄 Loading data and training item similarity model...")

    df = pd.read_csv("data/amazon.csv")
    df['rating'] = pd.to_numeric(df['rating'], errors='coerce')  
    df = df.dropna(subset=['user_id', 'product_id', 'rating'])

    X, correlation_matrix = train_item_similarity_model(df)

    print("✅ Model ready!")

@app.get("/")
def home():
    return {"message": "Item-Based Recommender System API is live!"}

@app.get("/recommend/item/{product_id}")
def recommend_item(product_id: str, threshold: float = 0.9, top_n: int = 10):
    return get_similar_products(product_id, df, X, correlation_matrix, threshold, top_n)
