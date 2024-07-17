export default async function Wait(time:number) {
        return new Promise((res,rej) => {
              setTimeout(() => {
                  res("done");
              }, time);
        })
}