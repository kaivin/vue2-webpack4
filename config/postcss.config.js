module.exports = function (){
  const posts={
    plugins: [
      require('precss'),
      require('autoprefixer')({ 
        browsers: ['> 0.1%','last 7 iOS versions', 'last 5 versions',] 
      })
    ]
  }
  return posts
}