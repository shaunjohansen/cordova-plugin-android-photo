/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

var argscheck = require('cordova/argscheck');
var exec = require('cordova/exec');

/**
 * @namespace navigator
 */

/**
 * @exports photo
 */
var photoExport = {};

/**
 * Callback function that provides an error message.
 * @callback module:photo.onError
 * @param {string} message - The message is provided by the device's native code.
 */

/**
 * Callback function that provides the image data.
 * @callback module:photo.onSuccess
 * @param {string} imageUri - the image file URI.
 * @example
 * // Show image
 * //
 * function cameraCallback(imageUri) {
 *    var image = document.getElementById('myImage');
 *    image.src = imageUri;
 * }
 */

/**
 * @description Takes a photo using the camera.  The image is passed to the success callback as
 * the URI for the image file.
 *
 * The `photo.getPicture` function opens the device's default camera
 * application that allows users to snap a photo.
 * Once the user snaps the photo, the camera application closes and the application is restored.
 *
 * A `String` representing the image file location on local storage is sent to the
 * [`cameraSuccess`]{@link module:camera.onSuccess} callback function.
 *
 * __Supported Platforms__
 *
 * - Android
 *
 * @example
 * navigator.photo.getPicture(cameraSuccess, cameraError);
 * @param {module:camera.onSuccess} successCallback
 * @param {module:camera.onError} errorCallback
 */
photoExport.getPicture = function (successCallback, errorCallback) {
    argscheck.checkArgs('fF', 'Camera.getPicture', arguments);

    exec(successCallback, errorCallback, 'Camera', 'takePicture');
};

module.exports = photoExport;
