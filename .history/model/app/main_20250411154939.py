from fastapi import FastAPI
import pandas as pd
from recommend.item_based import train_item_similarity_model, get_similar_products
from recommend.user_based import train_user_based_model, get_user_recommendations
import os

app = FastAPI()

df = None
X = None
correlation_matrix = None

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(BASE_DIR, "data")

def load_csv(filename):
    path = os.path.join(DATA_DIR, filename)
    return pd.read_csv(path).to_dict(orient="records")


@app.on_event("startup")
def startup_event():
    global df, X, correlation_matrix
    print("🔄 Loading data and training item similarity model...")

    df = pd.read_csv("data/amazon.csv")
    df['rating'] = pd.to_numeric(df['rating'], errors='coerce')  
    df = df.dropna(subset=['user_id', 'product_id', 'rating'])

    X, correlation_matrix = train_item_similarity_model(df)

    print("✅ Item Model ready!")

    global user_model
    user_model = train_user_based_model(df)

    print("✅ User Model ready!")

@app.get("/")
def home():
    return {"message": "Recommender System API is live!"}

@app.get("/recommend/item/{product_id}")
def recommend_item(product_id: str, threshold: float = 0.9, top_n: int = 10):
    return get_similar_products(product_id, df, X, correlation_matrix, threshold, top_n)

@app.get("/recommend/user/{user_id}")
def recommend_user(user_id: str, top_n: int = 10):
    return get_user_recommendations(user_id, df, user_model, top_n)

@app.get("/recommend/hidden_gems")
def hidden_gems():
    return load_csv("hidden_gems.csv")

@app.get("/recommend/top-popular")
def top_popular():
    return load_csv("top_popular.csv")

@app.get("/recommend/top-reviewed")
def top_reviewed():
    return load_csv("top_reviewed_products.csv")

@app.get("/recommend/top-discounts")
def top_discounted():
    return load_csv("top_discounted_products.csv")