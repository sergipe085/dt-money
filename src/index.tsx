import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { App } from './App';

createServer({
  routes() {
    this.namespace = "api"; 

    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "transaction 01",
          amount: 400,
          type: "deposit",
          category: "food",
          createdAt: Date.now()
        }
      ]
    });

    this.post("/transactions", (schema, req) => {
      const data = JSON.parse(req.requestBody);
      return data;
    });
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
