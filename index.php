<?php
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Unit-Converter</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.11"></script>
    <style>
#app{
position: absolute;
            width: 240px;
            height: 250px;
            margin: auto;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
        }
    </style>
</head>
<body>
<div id="app">
    <div id="content">
        <h3 style="text-align: center">Unit Converter</h3>
        <form>
            <div>
                <lable>Chose the converter</lable>
                <select v-model="selected">
                    <option v-for="option in options" v-bind:value="option.value">
                        {{option.text}}
                    </option>
                </select>
            </div>
            <div>
                <input type="text" v-model="inputNum">
                <select id="base-unit" v-model="inputValue">
                    <template v-if="optionSelected.length > 0">
                        <option v-for="option in optionSelected" v-bind:value="option.value">
                            {{option.text}}
                        </option>
                    </template>
                </select>

            </div>
            <div>
                <input type="text" v-model="outputNum">
                <select name="" id="goal-unit" v-model="outputValue">
                    <template v-if="optionSelected.length > 0">
                        <option v-for="option in optionSelected" v-bind:value="option.value">
                            {{option.text}}
                        </option>
                    </template>
                </select>
            </div>
        </form>
    </div>
</div>
</body>
<script src="js.js"></script>
</html>