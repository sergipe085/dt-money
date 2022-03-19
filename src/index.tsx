import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "oi1",
          value: 100,
          category: "bao",
          type: "withdraw",
          createdAt: new Date()
        },
        {
          id: 2,
          title: "oi2",
          value: 1002,
          category: "bao2",
          type: "deposit",
          createdAt: new Date()
        },
      ]
    })
  },
  routes() {
    this.namespace = "api"; 

    this.get("/transactions", (schema) => {
      return schema.all("transaction");
    });

    this.post("/transactions", (schema, req) => {
      const data = JSON.parse(req.requestBody);
      return schema.create("transaction", data);
    });
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
