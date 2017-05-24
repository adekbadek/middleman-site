import Bricks from 'bricks.js'

const instance = Bricks({
  container: '.categories-container',
  packed: 'packed',
  sizes: [
    { columns: 1, gutter: 20 },
    { mq: '940px', columns: 2, gutter: 20 }
  ]
})

instance.resize(true)
instance.pack()
