import http from 'k6/http';

export default function () {
  http.get('https://localhost:4241/api/hero');
}
