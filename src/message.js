import {Message} from 'element-ui';

const message = function(options){
    options = options.type == 'success' ? {showClose:true, duration:1000,...options} : options = {showClose:true,...options}
    return Message(options)
}

;['success', 'warning', 'info', 'error'].forEach(type => {
    Message[type] = options => {
      if (typeof options === 'string') {
        options = {
          message: options
        };
      }
      options.type = type;
      options = options.type == 'success' ? {showClose:true, duration:1000,...options} : options = {showClose:true,...options}
      return message(options);
    };
});
export default message