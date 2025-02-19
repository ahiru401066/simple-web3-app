# ベースイメージ（Python 3.11）
FROM python:3.11

# 作業ディレクトリを設定
WORKDIR /app/backend

# 依存関係をコピー
COPY requirements.txt ./

# 依存関係をインストール（FastAPI, Uvicorn, MySQL用のライブラリなど）
RUN pip install --no-cache-dir -r requirements.txt

# アプリケーションのコードをコピー
# COPY . .

# FastAPIのサーバーを起動
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
#CMD ["bash"]
