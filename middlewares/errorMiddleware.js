module.exports = (err, _req, res, _next) => {
    if (err.isJoi) {
      console.log('JOI', err.message);
      const status = '400';  
      return res.status(status).json({ message: err.message });
    }
    return res.status(500).json({ message: err.message });
  };
