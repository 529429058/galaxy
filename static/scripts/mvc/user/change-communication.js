define(["mvc/form/form-view","mvc/ui/ui-misc"],function(a,b){return Backbone.View.extend({initialize:function(c){var d=this;this.model=c&&c.model||new Backbone.Model(c),this.form=new a({title:"Enable real-time communication with other Galaxy users",icon:"fa-child",inputs:[{name:"enable",type:"boolean",label:"Enable communication",value:c.activated}],operations:{back:new b.ButtonIcon({icon:"fa-caret-left",tooltip:"Return to user preferences",title:"Preferences",onclick:function(){d.remove(),c.onclose()}})},onchange:function(){d._save()}}),this.setElement(this.form.$el)},_save:function(){var a=this;$.ajax({url:Galaxy.root+"api/user_preferences/"+Galaxy.user.id+"/communication",type:"PUT",data:{enable:a.form.data.create().enable}}).done(function(b){a.form.message.update({message:b.message,status:"success"})}).fail(function(b){a.form.message.update({message:b.responseJSON.err_msg,status:"danger"})})}})});
//# sourceMappingURL=../../../maps/mvc/user/change-communication.js.map