import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faDollar, faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import Box from '@mui/material/Box';


function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function IconBreadcrumbs() {

    // 模拟文章数据
    const articles = [
        { id: 1, title: 'Breaking News Article', isLatest: true },
        { id: 2, title: 'Exciting Feature Article', isLatest: true },
        { id: 3, title: 'Old But Gold Article', isLatest: false },
        { id: 4, title: 'Another Previous Article', isLatest: false },
    ];


    const latestArticles = articles.filter((article) => article.isLatest);
    const previousArticles = articles.filter((article) => !article.isLatest);

    const handleArticleClick = (articleId) => {
        // 可以在这里实现导航逻辑，比如使用 history.push
        console.log(`Navigate to article with id ${articleId}`);
    };

    return (
        <>
            <div role="presentation" onClick={handleClick}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link
                        underline="hover"
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="inherit"
                        href="/"
                    >
                        <FontAwesomeIcon icon={faNewspaper} />
                        Latest articles
                    </Link>
                    <Link
                        underline="hover"
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="inherit"
                        href="/material-ui/getting-started/installation/"
                    >
                        <FontAwesomeIcon icon={faHeartbeat} />
                        Daily
                    </Link>
                    <Typography
                        sx={{ color: 'text.primary', display: 'flex', alignItems: 'center' }}
                    >
                        <FontAwesomeIcon icon={faDollar} />
                        other
                    </Typography>
                </Breadcrumbs>
            </div>
            <div className="articleContent">
                <Box sx={{ border: '1px solid #ccc', padding: '16px', marginBottom: '16px' }}>
                    <Typography variant="h5">Latest Articles</Typography>
                    {latestArticles.map((article) => (
                        <Typography
                            key={article.id}
                            onClick={() => handleArticleClick(article.id)}
                            style={{ cursor: 'pointer', textDecoration: 'underline' }}
                        >
                            {article.title}
                        </Typography>
                    ))}
                </Box>
                <Box sx={{ border: '1px solid #ccc', padding: '16px' }}>
                    <Typography variant="h5">Previous Articles</Typography>
                    {previousArticles.map((article) => (
                        <Typography
                            key={article.id}
                            onClick={() => handleArticleClick(article.id)}
                            style={{ cursor: 'pointer', textDecoration: 'underline' }}
                        >
                            {article.title}
                        </Typography>
                    ))}
                </Box>
            </div>
        </>
    );
}
