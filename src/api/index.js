import axios from 'axios';

import { apiPrefix } from '../../backend/etc/config.json';

export default {
    listProducts() {
        return axios.get(`${apiPrefix}/`);
    }
}
