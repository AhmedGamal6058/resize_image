/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
let cacheed=false;
function cache(path:string):boolean{
    try {
        if (fs.existsSync(path)) {
          cacheed=true
        }
      } catch (err) {
        cacheed=false
      }
    return cacheed;
}
export default cache;
