module.exports = {
  apps: [
    {
      script: 'gameserver.js',
      cwd: 'backend/',
      name: 'Backend',
      watch: true
    },
    {
      script: 'gamefront.js',
      cwd: 'frontend/',
      name: 'Frontend',
      watch: true
    }
    /*{
      script: 'npm start',
      cwd: 'backend/',
      name: 'Backend',
      watch: true
    },
    {
      script: 'npm start',
      cwd: 'frontend/',
      name: 'Frontend',
      watch: true
    }*/
  ]
}
