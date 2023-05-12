import { useState } from 'react';

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
//   initial index = 0
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>

      {/* //Here We Can use the panel function as like as component and change the state process   */}

      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
        {/* this paragraph pass as a props inner pannel component with using name of """"""children"""""" */}
      </Panel>

      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        The name comes from the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild  is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>

      <Panel
         title="Contact US"
         isActive={activeIndex === 2}
         onShow={() => setActiveIndex(2)}
      >
        With the best Contact Us page design examples outlined in this article, learn how to craft a helpful and informative page that makes it easy for customers to connect with your business and get the information they need.
      </Panel>
    </>
  );
}

function Panel({
  title,
  children,
  isActive,
  onShow
}) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}
