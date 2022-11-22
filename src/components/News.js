import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap"
import axios from "axios"

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get("https://newsapi.org/v2/top-headlines?apiKey=6d36a43e2ab643af9f2a95f64b8bf2cc&country=in")
      .then((res) => setNews(res.data.articles))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <Row>
        {news.length ? (
          news.map((singleNews, index) => (
            <Col md={4} className="mt-2 mb-2" key={index}>
              <Card style={{ textAlign: "center" }}>
                <Card.Img
                  variant="top"
                  src={singleNews.urlToImage}
                  style={{ height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>{singleNews.content}</Card.Title>
                  <a
                    href={singleNews.url}
                    className="btn btn-dark btn-sm"
                    style={{ margin: "0 5px" }}
                  >
                    Read more
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Spinner
            animation="border"
            role="status"
            style={{ margin: "200px auto" }}
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
      </Row>
    </Container>
  );
};

export default News;

// Various types of request method/ HTTP methods - GET, POST, etc
