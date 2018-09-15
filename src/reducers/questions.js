export default [
  {
    question: `# This is an <h1>
## This is an <h2>
### This is an <h3>
#### This is an <h4>
##### This is an <h5>
###### This is an <h6>`,
    answear: [
      {
        content: 'c1',
        correct: true,
      },
      {
        content: `\`\`\`math #yourmathlabel
a + b = c
\`\`\``,
        correct: false,
      },
      {
        content: 'c1',
        correct: false,
      },{
        content: 'c1',
        correct: false,
      }
    ]
  },
  {
    question: 'q2',
    answear: [
      {
        content: 'c1',
        correct: true,
      },
      {
        content: 'c1',
        correct: false,
      },
      {
        content: 'c1',
        correct: false,
      },{
        content: 'c1',
        correct: false,
      }
    ]
  },
  {
    question: 'q3',
    answear: [
      {
        content: 'c1',
        correct: true,
      },
      {
        content: 'c1',
        correct: false,
      },
      {
        content: 'c1',
        correct: false,
      },{
        content: 'c1',
        correct: false,
      }
    ]
  },
  {
    question: 'q4',
    answear: [
      {
        content: 'c1',
        correct: true,
      },
      {
        content: 'c1',
        correct: false,
      },
      {
        content: 'c1',
        correct: false,
      },{
        content: 'c1',
        correct: false,
      }
    ]
  },
]
