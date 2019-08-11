const express = require('express');
const supertest = require('supertest');
const initMiddleware = require('./middleware');

const app = initMiddleware(express());

global.api = supertest(app);
