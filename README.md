### BreadCount:

BreadCount is designed to resemble a simple base-10 adder/counter, with simulated latches and logic gates.

It simulates every logical part that would go into a real life breadboard adder, like:
    bitHalfAdder,
    bitFullAdder, 
    fourBitAdder, 
    bcdConversion, 
    and a schema that combines these to make a cohesive 8 digit binary-coated decimal adder.

The website that includes a next-js UI contacting the logical components: [github link](https://github.com/4B72697368/BreadCount/tree/main/website/app/components).

The website is on [breadcount.vercel.app](https://bread-count.vercel.app/)

### Notice:
Even though it appears to be a simple calculator, each addition is cascading through hundreds bit operators.
Some of this is, such as the current memory, is exposed through the Data tab, but to understand how it works fully, we heavily recommend glancing at the code for a couple minutes ESPECIALLY THE LOGICAL COMPONENTS on (Github)[https://github.com/4B72697368/BreadCount/tree/main/website/app/components].

### Currently:
I'm also working on building this in real life, with over 40 breadboards, 64 logic gate chips, and a whole lot of computer science.
