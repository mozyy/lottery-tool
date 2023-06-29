// 我的ts中有两个 class:
// eslint-disable-next-line max-classes-per-file
class ClassA {
  id: string,
  method1(param: string):string {
    // ...
    return 'param';
  }

  method2(param: number):number {
    // ...
    return 1;
  }
}
class ClassB {
  method3(param: string):string {
    // ...
    return 'param';
  }

  method4(param: number):number {
    // ...
    return 1;
  }
}
// 我想写一个函数： 第一个参数为类的实例，第二个为这个实例的方法名，第三个为对应方法的参数，返回为对应方法的返回。怎么写才能够有typescript的参数与返回的类型提示，请帮我改一下
function fun<Class, Method extends keyof Class, Param>(instance: Class, method: Method, param: Param): ReturnType<Class[Method]> {
  const handler = instance[method] as (...args: any[]) => ReturnType<Class[Method]>;
  return handler(param);
}


const instanceA = new ClassA();
const resultA = fun(instanceA, 'method1', 0);
// resultA 的类型为 string

const instanceB = new ClassB();
const resultB = fun(instanceB, 'method3', 10);
// resultB 的类型为 number