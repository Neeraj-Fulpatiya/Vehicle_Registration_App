//package com.codewithneeraj.fullstack_backend.exception;
//
//public class UserNotFoundException extends RuntimeException {
//    public UserNotFoundException(Long id){
//        super("Could not find the user with id "+id);
//    }
//
//}
package com.codewithneeraj.fullstack_backend.exception;
/* Created by Arjun Gautam */

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id){
        super("Could not found the user with id "+ id);
    }
}