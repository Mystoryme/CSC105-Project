package com.example.myplan.controller.todolist;

import com.example.myplan.model.Task;
import com.example.myplan.util.MySqlConnection;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/todolist")

public class AddTodo {
    @PostMapping(path = "/add")
    public Map<String, Object> addtodo(@RequestBody Task task){

        Map<String, Object> res = new HashMap<>();
        try{
            Connection connection = MySqlConnection.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement("INSERT into todo (text, date) value (?,?)");
            preparedStatement.setString(1, task.getText());
            Date date = new Date(task.getDate());
            preparedStatement.setDate(2, date);
            preparedStatement.execute();
            res.put("success", true);
        }
        catch (SQLException e) {
            e.printStackTrace();
            res.put("success", false);
        }
        return res;
    }
}
