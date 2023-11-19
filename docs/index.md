<!-- ---
hero:
  title: Welcome
  description: A website developed by newbie
  actions:
    - text: Don't know go where
      link: /
    - text: right now
      link: /
features:
  - title: Hello
    emoji: 💎
    description: Put hello description here
  - title: World
    emoji: 🌈
    description: Put world description here
  - title: '!'
    emoji: 🚀
    description: Put ! description here
--- -->

<div dangerouslySetInnerHTML={{ __html: require('!!raw-loader!../home.html').default }} />
