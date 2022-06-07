import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControlState, FormState } from 'ngrx-forms';
import { Question } from '../models/Question';
import { Response } from '../models/Response';
import {
  CreateGroupElementAction,
  FormValue,
  RemoveGroupElementAction,
  State,
} from '../store';
import { RuleService } from './rule.service';

@Injectable({
  providedIn: 'root',
})
export class ActionService {
  questions: Question[] = [];
  formState: FormState<FormValue>;

  constructor(private ruleService: RuleService, private store: Store<State>) {
    this.store.subscribe((state) => {
      this.questions = state.form.questions;
      this.formState = state.form.formState;
    });
  }

  validate(question: Question, control: FormControlState<any>) {
    question.rules.forEach((rule) => {
      const destinationId = rule.destinationId;

      switch (rule.action) {
        case 'RETRIEVE_RESPONSE':
          this.getResponsesFromPreviousAnswer(question, control, destinationId);
      }
    });
  }

  getResponsesFromPreviousAnswer(
    question: Question,
    control: FormControlState<any>,
    destinationId: number
  ) {
    const responseKeyList: string[] = [];
    const responses: Response[] = this.questions.find((q) => q.id === question.id)!.responses;
    const selectedOptionIds: string[] = control.value.split(',');
    const prevValues = Object.keys(this.formState.controls[destinationId].value);

    for (let id of selectedOptionIds) {
      for (let response of responses) {
        if (parseInt(id) === response.id) responseKeyList.push(response.responseKey);
      }
    }

    // remove input
    if (responseKeyList.length < prevValues.length) {
      const responseKey = prevValues.filter((v) => !responseKeyList.includes(v));
      this.store.dispatch(new RemoveGroupElementAction(responseKey, destinationId));
    }

    // add input
    responseKeyList.forEach((responseKey) => {
      this.store.dispatch(new CreateGroupElementAction(responseKey, destinationId));
    });
  }
}

//   var allActions = this.ruleService.actions || [];
//   allActions.forEach(action => {
//     var destination = action.destinationId.toString();
//     switch (action.action) {
// case 'HIDE':
//   this.showHide(sectionComponents, action.key, destination, true);
//   break;
// case 'SHOW':
//   this.showHide(sectionComponents, action.key, destination, false);
//   break;
// case 'REFERRED':
//   this.ruleService.addReferred(action.rule);
//   break;
// case 'EXCLUDED':
//   var section = form.sections.find(x => x.questions.some(y => y.id == action.rule.questionId));
//   if(section != null && form.sections.indexOf(section) == currentSection){
//     this.ruleService.addExcluded(action.rule);
//   }
//   break;
// case 'FORCE':
//   this.forceValue(sectionState, sectionComponents, action.key, action.rule);
//   break;
// case 'UNFORCE':
//   this.forceValue(sectionState, sectionComponents, action.key, action.rule, true);
//   break;
//       case 'RETRIEVE':
//         this.getOptionsFromPreviousAnswer(sectionComponents, action.rule);
//         break;
//     }
//     this.ruleService.actions = this.ruleService.actions.filter(x => x != action);
//   });
// }

// showHide(sectionComponents:any, _key:string, id: string, hidden: boolean) {
//   sectionComponents.forEach(section => {
//     var control = null;
//     var _question = null;
//     var array = section["formArray"] ? section["formArray"] : section;
//     array.forEach((page:FormPage) => {
//       if(control)
//         return false;
//       for(var key in page.formGroup.controls){
//         if(key == _key){
//           control = page.formGroup.controls[key];
//           break;
//         }
//       }
//       page.questions.forEach(question => {
//         if(question.key == _key){
//           _question = question;
//         }
//       })
//     });
//     if(_question){
//       _question.isHidden = hidden;
//     }
//     if (control) {
//       if (hidden) {
//         control.reset();
//         control.disable();
//         this.ruleService.resetHidden(_question);
//       }
//       else {
//         control.enable();
//       }
//     }
//   });
// }

// forceValue(sectionState:Section[], sectionComponents:any, key:string, rule:Rule, unforce:boolean = false){
//   var id = rule.destinationId;
//   sectionState.find(x => x.questions.some(x => x.id == id)).questions.find(x => x.id == id).defaultValue = rule.forceValue;
//   sectionComponents.forEach(section => {
//     var control = null;
//     var index = rule.isForceOnResponseList ? rule.responseKey : id;
//     section.formArray.forEach((page:FormPage) => {
//       if(page.formGroup.controls[index]){
//         control = page.formGroup.controls[index];
//         return false;
//       }
//     });
//     if (control) {
//       if(!unforce){
//         control.patchValue(rule.forceValue);
//       }
//       var question = null;
//       section.formArray.forEach((page:FormPage) => {
//         page.questions.forEach(q => {
//           if(q.key == key){
//             question = q;
//           }
//         })
//       });
//       if(question) {
//         if(rule.isForceOnResponseList){
//           var opt = question["options"].find(x => x.key == rule.responseKey);
//           if(opt){
//             opt.value = unforce ? opt.value : rule.forceValue;
//             opt.isReadOnly = unforce ? false : true;
//           }
//         }
//         else {
//           question.value = unforce ? question.value : rule.forceValue;
//           question.isReadOnly = unforce ? false : true;
//         }
//       }
//     }
//   });
// }

// getOptionsFromPreviousAnswer(sectionComponents:any, rule:Rule){
//   var id = rule.destinationId.toString();
//   var sourceId = rule.questionId.toString();
//   var answers = [];
//   var destinationQuestions = [];

//   // use forms value and patchvalue of form instead

//   sectionComponents.forEach(section => {
//     var forms = section.formArray || section;
//     forms.forEach((page:FormPage) => {
//       page.questions.forEach(question => {
//         if(question.key.split('_')[0] == sourceId){
//           var value = question.getValue().toString();
//           if(answers.indexOf(value) == -1)
//             answers.push(value);
//         }
//         if(question.key.split('_')[0] == id) {
//           if(destinationQuestions.indexOf(question) == -1)
//             destinationQuestions.push(question);
//         }
//       });
//     });
//   });
//   for(var _question of destinationQuestions){
//     if(_question){
//       if(_question.controlType == 'select'){
//         _question["options"] = [];
//         answers.forEach(answer => {
//           var _value = answer.toString();
//           if(!_question["options"].some(x => x.key == _value )){
//             _question["options"].push({key:_value , title: new Label(_value , _value )});
//           }
//         });
//       }
//     }
//   }
// }
