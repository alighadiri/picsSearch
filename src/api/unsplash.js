import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID X8M0jPCanRLcL0ig5jl85D0Lk_C1EZhPXW60wag2bG0",
      },
  });
  