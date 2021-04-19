module.exports = async function (context, req) {
    context.res = {
      body: {
        text: "Hello from the Demo à la vanille LIVE"
      }
    };
  };