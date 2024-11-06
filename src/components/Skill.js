import React from "react";
import { IconSkill } from "./IconSkill";
import "../css/skill.css"

export const Skill = () => {
    return(
        <div className="skill">
            <h1 id="text-hover" className="mb-5">Skill</h1>
            <div id="main-skill" className="d-flex w-100 justify-content-between">
                <div id="skill-left" className="w-50">
                    <div id="programming-skill" className="mb-5">
                        <p id="text-hover">Programming Language</p>
                        <div id="skill-icons" className="d-flex">
                            <div className="icon">
                                <IconSkill path="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="html" />
                                <center>HTML</center>
                            </div>
                            <div className="icon">
                                <IconSkill path="/icons/skill/css.webp" alt="css" />
                                <center>CSS</center>
                            </div>
                            <div className="icon">
                                <IconSkill path="https://th.bing.com/th/id/R.1befcc4ce3ff6c0fcd919302622ca38c?rik=nOGPSmScaYABDw&pid=ImgRaw&r=0" alt="php" />
                                <center>PHP</center>
                            </div>
                            <div className="icon">
                                <IconSkill path="https://cdn.iconscout.com/icon/free/png-256/free-python-logo-icon-download-in-svg-png-gif-file-formats--programming-language-logos-icons-1720083.png?f=webp" alt="python" />
                                <center>Python</center>
                            </div>
                            <div className="icon">
                                <IconSkill path="https://brandlogos.net/wp-content/uploads/2021/11/java-logo.png" alt="java" />
                                <center>java</center>
                            </div>
                        </div>
                        <div id="skill-icons" className="d-flex">
                            <div className="icon">
                                <IconSkill path="https://static.vecteezy.com/system/resources/previews/027/127/560/original/javascript-logo-javascript-icon-transparent-free-png.png" alt="javascript" />
                                <center>Java</center>
                                <center>Script</center>
                            </div>
                            <div className="icon">
                                <IconSkill path="https://www.svgrepo.com/show/374144/typescript.svg" alt="typescript" />
                                <center>Type</center>
                                <center>Script</center>
                            </div>
                            <div className="icon">
                                <IconSkill path="https://cdn-images-1.medium.com/max/1200/1*knHF_qpxdtS8h0Z8EeqowA.png" alt="dart" />
                                <center>Dart</center>
                            </div>
                        </div>
                    </div>
                    <div id="framework-skill">
                        <p id="text-hover">Frameworks / Libraries</p>
                        <div id="skill-icons" className="d-flex">
                            <div className="icon">
                                <IconSkill path="https://netrodgen.github.io/cv/assets/atomic-energy.png" alt="react" />
                                <center>React</center>
                            </div>
                            <div className="icon">
                                <IconSkill path="https://1.bp.blogspot.com/-sqAjIvOtpXI/XYoCmqOyMwI/AAAAAAAAJig/CowR8wgEauEs-RXN2IPmLYkC7NHoHuA3gCLcBGAsYHQ/s1600/node-js-logo.png" alt="nodejs" />
                                <center>NodeJs</center>
                                <center>(express)</center>
                            </div>   
                            <div className="icon">
                                <IconSkill path="https://seekicon.com/free-icon-download/flutter_2.png" alt="flutter" />
                                <center>Flutter</center>
                            </div>
                            <div className="icon">
                                <IconSkill path="https://brandlogos.net/wp-content/uploads/2021/09/bootstrap-logo-768x768.png" alt="bootstrap" />
                                <center>Bootstrap</center>
                            </div>
                            <div className="icon">
                                <IconSkill path="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3257079/file-type-tailwind-icon-md.png" alt="tailwind" />
                                <center>tailwind</center>
                            </div>                            
                        </div>
                    </div>
                </div>
                <div id="skill-right" className="w-50">
                    <div id="tools-skill" className="mb-5">
                        <p id="text-hover">Dev Tools</p>
                        <div id="skill-icons" className="d-flex">
                            <div className="icon">
                                <IconSkill path="https://th.bing.com/th/id/R.5dad01124c25d19c78aa763d94c6c3ee?rik=O6yFxpwCtIymFA&pid=ImgRaw&r=0" alt="git" />
                                <center>Git</center>
                            </div>
                            <div className="icon">
                                <IconSkill path="https://sdtimes.com/wp-content/uploads/2018/08/logo-glyph.png" alt="postman" />
                                <center>Postman</center>
                            </div>
                            <div className="icon">
                                <IconSkill path="https://cdn.icon-icons.com/icons2/2407/PNG/512/docker_icon_146192.png" alt="docker" />
                                <center>Docker</center>
                            </div>
                            <div className="icon">
                                <IconSkill path="https://cdn2.iconfinder.com/data/icons/mixd/512/20_kubernetes-1024.png" alt="kubernetes" />
                                <center>Kubernetes</center>
                                <center>(Learning)</center>
                            </div>        
                        </div>                        
                    </div>
                    <div id="database-skill">
                        <p id="text-hover">Database</p>
                        <div id="skill-icons" className="d-flex">
                            <div className="icon">
                                <IconSkill path="https://cdn-icons-png.flaticon.com/512/5968/5968313.png" alt="mysql" />
                                <center>MySQL</center>
                            </div>
                            <div className="icon">
                                <IconSkill path="https://cdn.iconscout.com/icon/free/png-512/mongodb-3521676-2945120.png" alt="mongodb" />
                                <center>MongoDB</center>
                            </div>
                            <div className="icon">
                                <IconSkill path="https://cdn.icon-icons.com/icons2/2699/PNG/512/firebase_logo_icon_171157.png" alt="firebase" />
                                <center>Firebase</center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}