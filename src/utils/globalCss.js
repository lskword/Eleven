import theme from 'Static/theme'

export function themeColor() {

  var options = process.env.BASE_COLOR

  var obj =  {
      // primary: '#009688',
      // primary: "#913c70",
      primary: options.primary ||　"#009688",
      secondary:options.secondary ||　 '#ff4081',
      success:options.success ||　 '#4caf50',
      error:options.error ||　 '#db4356',
      warning:options.warning ||　 '#febd7d',
      info:options.info ||　 '#e4e7e5'
    }
  theme.add('teal', obj, 'light');
  theme.use('teal')
}

themeColor()