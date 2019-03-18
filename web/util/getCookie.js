import cookies from 'js-cookie';

const getRequestCookieByName = (req, name) => {
  const {
    headers: { cookie },
  } = req;

  if (!cookie) {
    return null;
  }

  return null;
};

const getCookie = (req, name) => (req ? getRequestCookieByName(req, name) : cookies.get('token'));

export default getCookie;
