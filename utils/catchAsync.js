module.exports = (func) => {
  return (req, res, next) => {
    func(req, res, next).catch(next);
  };
};

// Func is what is passed in, it returns
// new function that has func executed and
// catches any errors and passes them to next.
