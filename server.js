const express = require("express"),
  app = express();

app.use(express.static("public"));
app.use(express.static("views"));
app.use(express.static("./"));
app.use(express.json());

const { expressCspHeader, INLINE, NONE, SELF } = require('express-csp-header');

app.use(expressCspHeader({
    directives: {
        'default-src': [SELF],
        'script-src': [SELF, INLINE],
        'style-src': [SELF],
        'img-src': [SELF],
        'worker-src': [NONE],
        'block-all-mixed-content': true
    }
}));

app.listen(3000);
