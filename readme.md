# ITパスポート試験対策 クイズアプリ

ITパスポート試験の過去問題を学習するためのクイズアプリケーションです。

## 主な機能

- **年度別クイズ**: 令和2年度から7年度までの問題に対応しています。
- **出題範囲の選択**: 全問題、ランダム10問、または10問ごとの範囲を指定してクイズを開始できます。
- **ログイン機能**: ユーザーごとに学習進捗を記録します。
- **進捗トラッキング**: 正解数に応じてメダル（🥉🥈🥇）が表示され、学習の達成度が一目でわかります。
- **レスポンシブデザイン**: PC、スマートフォンの両方で快適に利用できます。

## 使用技術

- **フロントエンド**: HTML, CSS, JavaScript (ES Modules)
- **バックエンド**: [Supabase](https://supabase.com/) (データベース, 認証)
- **開発サーバー**: [live-server](https://www.npmjs.com/package/live-server)
- **デプロイ**: [Vercel](https://vercel.com/)

## ローカルでの実行方法

### 1. プロジェクトのクローン

```bash
git clone https://github.com/your-username/quiz-app.git
cd quiz-app
```

### 2. 依存関係のインストール

```bash
npm install
```

### 3. Supabaseのセットアップ

1.  [Supabase](https://supabase.com/)で新しいプロジェクトを作成します。
2.  以下のスキーマでテーブルを作成します。

    **`questions` テーブル**
    ```sql
    CREATE TABLE questions (
      id SERIAL PRIMARY KEY,
      year TEXT,
      question TEXT,
      image_url TEXT,
      choice_a TEXT,
      choice_b TEXT,
      choice_c TEXT,
      choice_d TEXT,
      correct TEXT,
      explanation TEXT
    );
    ```

    **`answer_logs` テーブル**
    ```sql
    CREATE TABLE answer_logs (
      id SERIAL PRIMARY KEY,
      user_id UUID,
      question_id INTEGER,
      is_correct BOOLEAN
    );
    ```
3.  `supabaseClient.js` ファイルと`index.html`内のSupabaseクライアントの初期化部分に、ご自身のSupabaseプロジェクトのURLと`anon`キーを設定します。

    ```javascript
    const SUPABASE_URL = 'YOUR_SUPABASE_URL'
    const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY'
    ```

### 4. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://127.0.0.1:8080` が開きます。

## デプロイ

このプロジェクトは`vercel.json`を含んでおり、Vercelにデプロイする準備ができています。リポジトリをVercelに接続するだけで、自動的にデプロイが行われます。
