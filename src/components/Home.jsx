import React, { createContext, useContext, useEffect, useState } from 'react';
import { Button } from 'antd';
import { CountContext } from '../App';
// import { useHistory } from 'react-router-dom'
// eslint-disable-next-line react-hooks/rules-of-hooks
// const history = useHistory()
function Profile() {
  const user = {
    firstName: 'is componentssa',
    lastName: 'Johnson',
    isok: true
  };

  return (
    <>
    </>
  );
}

const Home = () => {
  const message = useContext(CountContext)  //一句话就可以得到count
  console.log('=====', message)
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);

  const [products, setProducts] = useState([
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 }
  ]);

  useEffect(() => {
    console.log('Component is created');
    return () => console.log('Component is unmounted');
  }, []); // 为空数组，每次只执行一次，不然会打印两次

  // 1、useEffect(() => { console.log(1) }); // 如果不传，如语法1，则每次页面数据有更新（如componentDidUpdate），都会触发 effect。

  // 2、useEffect(() => { console.log(1) },[]);如果为空数组[]，如语法2，则每次初始化的时候只执行一次effect（如componentDidMmount）

  // 3、useEffect(() => { console.log(1) },[count]);如果只需要在指定变量变化时触发 effect，将该变量放入数组。如语法3，count只要变化，就会执行effect，如观察者监听

  useEffect(() => {
    console.log('componentDidMount', message);
    setIsLoading(false);
    console.log('===');
  }, [message]);

  useEffect(() => {
    console.log('Message prop has changed');
  }, [message]);

  useEffect(() => {
    console.log('Count state has changed:', count);
  }, [count]);

  const setprod = () => {
    const newProduct = [...products];
    newProduct[1] = { ...newProduct[1], isFruit: !newProduct[1].isFruit };
    setProducts(newProduct);
  };

  const addprod = () => {
    console.log('addprod');
    const newProduct = [...products];
    newProduct.push({
      title: 'Apple' + (products.length + 1),
      isFruit: true,
      id: products.length + 1
    });
    setProducts(newProduct);
  };

  const delprod = () => {
    const newProduct = [...products];
    newProduct.pop();
    setProducts(newProduct);
  };

  const copyprod = () => {
    const newProduct = [{ title: 'Cabbage', isFruit: false, id: 1 }];
    setProducts(newProduct);
  };

  const handleClick = (index: any) => {
    const newProducts = [...products];
    newProducts[index] = { ...newProducts[index], id: newProducts[index].id + 1 };
    setProducts(newProducts);
    setCount(count + 1);
  };

  const listItems = products.map((product, index) => (
    <li
      key={index}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
      onClick={() => handleClick(index)}
    >
      {product.title} {product.id}
    </li>
  ));

  return (
    <section>
      <h1>Amazing scientists</h1>
      <div>is componentssa</div>
      <ul>{listItems}</ul>
      <Profile />
      <Profile />
      <Profile />
      {/* <Form />   // Uncomment this if the Form component is provided */}
      <Button type="primary">Button</Button>
      <button onClick={addprod}>addprod</button>
      <button onClick={delprod}>delprod</button>
      <button onClick={setprod}>setprod</button>
      <button>跳转
        <link rel="stylesheet" href="/list" />
      </button>
    </section>
  );
}

export default Home;