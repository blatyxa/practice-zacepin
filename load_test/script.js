import http from 'k6/http';
import { sleep } from 'k6';
export let options = {VUS : 100, DURATION : '10s'};
export default function () {
    http.get('http://localhost:8080/');
    sleep(1);
}