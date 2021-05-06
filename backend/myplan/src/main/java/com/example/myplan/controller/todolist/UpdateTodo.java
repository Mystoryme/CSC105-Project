package com.example.myplan.controller.todolist;

import com.example.myplan.model.Task;
import com.example.myplan.util.MySqlConnection;
import org.springframework.web.bind.annotation.*;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/todolist")

public class UpdateTodo {
    @PutMapping(path = "/update/{id}")
    public Map<String, Object> updatetodo(@RequestBody Task task, @PathVariable int id){

        Map<String, Object> res = new HashMap<>();
        try{
            Connection connection = MySqlConnection.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement("UPDATE todo SET text=?, date=? where id=?");
            preparedStatement.setString(1, task.getText());
            Date date = new Date(task.getDate());
            preparedStatement.setDate(2, date);
            preparedStatement.setInt(3,id);
            preparedStatement.executeUpdate();
            res.put("success", true);
        } catch (SQLException e) {
            e.printStackTrace();
            res.put("success", false);
        }
        return res;
    }
}
