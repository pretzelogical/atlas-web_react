module.exports = {
  roots: ['../'],
  verbose: true,
  setupFilesAfterEnv: ["./setupTests.mjs"],
  silent: false,
  transform: {
    '^.+\\.js$': 'babel-jest',
  }
};
