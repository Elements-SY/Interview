class MVVM{
    constructor(option){
       this.$vm = this;
       this.$el = option.el;
       this.$data = option.data;

       if(this.$el){
          this.$compiler = new TemplateCompiler(this.$el,this.$vm);
       }
    }
}