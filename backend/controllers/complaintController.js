const express = require('express');
const complaint = require('../models/complaint');

const GetAllComplaints = async (req, res) => {
    try {
        const complaints = await complaint.find();
        res.status(200).json(complaints);
        console.log('Complaints fetched successfully!');
    } catch (err) {
        console.log(err);
        res.status(500).json('Internal Server Error');
    }
};

const GetSingleComplaint = async (req, res) => {
    const id = req.params.id;
    try {
        const fetchedComplaint = await complaint.findById(id);
        if (!fetchedComplaint) {
            console.log('Complaint Not Found');
            return res.status(404).json('Complaint Not Found');
        }
        res.status(200).json(fetchedComplaint);
    } catch (err) {
        console.log(err);
        res.status(500).json('Internal Server Error');
    }
};

const AddComplaint = async (req, res) => {
    try {
        const newComplaint = new complaint(req.body);
        const savedComplaint = await newComplaint.save();
        console.log('Complaint Added Successfully!');
        res.status(201).json(savedComplaint);
    } catch (err) {
        console.log(err);
        res.status(500).json('Internal Server Error');
    }
};

const UpdateComplaint = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedComplaint = await complaint.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedComplaint) {
            console.log('Complaint Not Found!');
            return res.status(404).json('Complaint Not Found');
        }
        console.log('Complaint Updated Successfully!');
        res.status(200).json(updatedComplaint);
    } catch (err) {
        console.log(err);
        res.status(500).json("Internal Server Error!");
    }
};

const DeleteComplaint = async (req, res) => {
    try {
        const id = req.params.id;
        const complaintToDelete = await complaint.findByIdAndDelete(id);
        if (!complaintToDelete) {
            console.log('Complaint Not Found!');
            return res.status(404).json('Complaint Not Found');
        }
        console.log('Complaint Deleted Successfully!');
        res.status(200).json('Complaint Deleted Successfully!');
    } catch (err) {
        console.log(err);
        res.status(500).json('Internal Server Error');
    }
};

module.exports = {
    GetAllComplaints,
    GetSingleComplaint,
    AddComplaint,
    UpdateComplaint,
    DeleteComplaint
};
