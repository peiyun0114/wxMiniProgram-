var examData = [
    {
        "type" : "radio",
        "options" : "今天是几号",
        "optionSelect" : [
            {
                "title" : "23",
                "xh" : "A",
                "flag" : false
            },
            {
                "title" : "25",
                "xh" : "B",
                "flag": false
            },
            {
                "title" : "14",
                "xh" : "C",
              "flag": false
            },
            {
                "title" : "24",
                "xh" : "D",
              "flag": false
            }
        ],
        "success" : ["D"],
        "select" : []
    },
    {
        "type" : "checkout",
        "options" : "vue的生命周期",
        "optionSelect" : [
            {
                "title" : "componentDidMount",
                "xh" : "A",
            "flag": false
            },
            {
                "title" : "beforeCreated",
                "xh" : "B",
              "flag": false
            },
            {
                "title" : "bedoreMounted",
                "xh" : "C",
              "flag": false
            },
            {
                "title" : "mounted",
                "xh" : "D",
              "flag": false
            }
        ],
        "success" : ["B","C","B"],
        "select" : []
    },
    {
        "type" : "radio",
        "options" : "今天考了几分",
        "optionSelect" : [
            {
                "title" : "90",
                "xh" : "A",
            "flag": false
            },
            {
                "title" : "93",
                "xh" : "B",
              "flag": false
            },
            {
                "title" : "100",
                "xh" : "C",
              "flag": false
            },
            {
                "title" : "65",
                "xh" : "D",
              "flag": false
            }
        ],
        "success" : ["B"],
        "select" : []
    },
    {
        "type" : "checkout",
        "options" : "js检查是否属数组里方式",
        "optionSelect" : [
            {
                "title" : "Array.isArray",
                "xh" : "A",
            "flag": false
            },
            {
                "title" : "array.prototype.isPrototype()",
                "xh" : "B",
              "flag": false
            },
            {
                "title" : "Object.prototype.toString.call()",
                "xh" : "C",
              "flag": false
            },
            {
                "title" : "24",
                "xh" : "D",
              "flag": false
            }
        ],
        "success" : ["A","B","C"],
        "select" : []
    },
    {
        "type" : "radio",
        "options" : "这是最后一题吗？",
        "optionSelect" : [
            {
                "title" : "是",
                "xh" : "A",
            "flag": false
            },
            {
                "title" : "不是",
                "xh" : "B",
              "flag": false
            },
            {
                "title" : "不知道",
                "xh" : "C",
              "flag": false
            },
            {
                "title" : "以上都不对",
                "xh" : "D",
              "flag": false
            }
        ],
        "success" : ["A"],
        "select" : []
    }
]

module.exports.mocklist = examData;