const VALID_ARTICLE_ID = '456';

const getArticlesHandler = (req, res) => {
    res.end('Get articles route')
}

const postArticlesHandler = (req, res) => {
    const articlesData = req.body;

    if (articlesData && articlesData.title) {
        res.status(201).send('Post articles route')
    } else {
        res.status(400).send('Bad Request')
    }
}

const getArticleByIdHandler = (req, res) => {
    const articleId = req.params.id;
    if (articleId === VALID_ARTICLE_ID) {
        res.status(200).send(`Get article by Id route: ${articleId}`)
    } else {
        res.status(404).send('Not Found')
    }
}

const putArticleByIdHandler = (req, res) => {
    const articleId = req.params.id;
    const articleData = req.body;

    if (articleId === VALID_ARTICLE_ID) {
        if (articleData && articleData.title) {
            res.status(200).send(`Put article by Id route: ${articleId}`)
        } else { res.status(400).send('Bad Request') }
    } else {
        res.status(404).send('Not Found')
    }
}

const deleteArticleByIdHandler = (req, res) => {
    const articleId = req.params.id;
    if (articleId === VALID_ARTICLE_ID) {
        res.status(204).send()
    } else {
        res.status(404).send('Not Found')
    }
}

export { getArticlesHandler, postArticlesHandler, getArticleByIdHandler, putArticleByIdHandler, deleteArticleByIdHandler }