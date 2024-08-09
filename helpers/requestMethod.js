import axios from 'axios';
import { baseUrl } from '../env.config.js';

export const userRequest = axios.create({
  baseURL: baseUrl,
});