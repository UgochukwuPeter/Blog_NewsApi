const express = require('express');
const axios = require('axios');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const NEWS_API_KEY = process.env.API_KEY;

app.use(express.json());
app.use(cors());

app.get('/popular', async (req, res) => {
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${NEWS_API_KEY}`);
        // Extract articles from the response
        // Extract articles from the response
        const articles = response.data.articles;
        
        // Limit the response to 2 articles
        const limitedArticles = articles.slice(0, 2);
        
        res.json(limitedArticles);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.get('/recent', async (req, res) => {
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${NEWS_API_KEY}`);
        // Extract articles from the response
         const articles = response.data.articles;
        
         // Limit the response to 1 articles
         const limitedArticles = articles.slice(0, 3);
        
        res.json(limitedArticles);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/news', async (req, res) => {
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`);
        
        // Extract articles from the response
        const articles = response.data.articles;
        
        // Limit the response to 6 articles
        const limitedArticles = articles.slice(0, 6);
        
        res.json(limitedArticles);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.get('/tech', async (req, res) => {
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${NEWS_API_KEY}`);
        
        // Extract articles from the response
        const articles = response.data.articles;
        
        // Limit the response to 1 articles
        const limitedArticles = articles.slice(0, 1);
        
        res.json(limitedArticles);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/search', async (req, res) => {
    const { query } = req.query;
    const date = new Date();
    const month = date.getMonth() + 1; // Get the current month correctly

    try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&from=${month}-01&sortBy=popularity&apiKey=${NEWS_API_KEY}`);
        res.json(response.data);
    } catch (error) {
        console.error('Error searching articles:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



app.listen(PORT, ()=>{
    console.log("Api connected successfully");
})