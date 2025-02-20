from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware  # CORSミドルウェアを正しくインポート

app = FastAPI()

# CORS設定（Reactと通信できるようにする）
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # フロントエンドのURLを指定するのがベスト
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],  # 必要なメソッドだけ許可
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Hello world!. FastAPI!"}
