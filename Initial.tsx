{\rtf1\ansi\ansicpg1251\cocoartf2870
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import * as readline from 'readline';\
\
function fibonacci(n: number): number[] \{\
    const sequence: number[] = [];\
    let a: number = 0;\
    let b: number = 1;\
\
    for (let i = 0; i < n; i++) \{\
        sequence.push(a);\
        [a, b] = [b, a + b];\
    \}\
\
    return sequence;\
\}\
\
const rl = readline.createInterface(\{\
    input: process.stdin,\
    output: process.stdout\
\});\
\
rl.question('How many Fibonacci numbers do you want? ', (answer: string) => \{\
    const count: number = parseInt(answer, 10);\
\
    if (isNaN(count) || count <= 0) \{\
        console.log('Please enter a positive integer.');\
    \} else \{\
        const result: number[] = fibonacci(count);\
        console.log(`First $\{count\} Fibonacci numbers: $\{result.join(', ')\}`);\
    \}\
\
    rl.close();\
\});}