const aliases = (prefix = './src') => ({
  '_': `${prefix}/lib`,
  '_/*': `${prefix}/lib/*`,
  '#': `${prefix}/lib/components`,
  '#/*': `${prefix}/lib/components/*`,
});

module.exports = aliases;
