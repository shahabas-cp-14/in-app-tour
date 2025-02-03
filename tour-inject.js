(function() {

    // Load external CSS file
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'http://localhost:8080/styles.css';
    document.head.appendChild(link);

     // HTML template directly in JS (matching index.html structure)
     const htmlTemplate = `
     <!-- Chat Widget Button -->
     <div class="chat-widget-button" id="chatButton">
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" fill="white"/>
         </svg>
     </div>

     <!-- Chat Widget Container -->
     <div class="chat-widget hidden" id="chatWidget">
         <!-- Empty State -->
         <div class="empty-state" id="emptyState">
             <div class="menu-button">
                 <div class="hamburger"></div>
             </div>
             
             <div class="header-content">
                 <div class="avatar-group">
                     <img src="https://randomuser.me/api/portraits/women/44.jpg" class="avatar" alt="Team member 1">
                     <svg class="bot-avatar" viewBox="0 0 32 32">
                         <rect width="32" height="32" rx="8" fill="black"/>
                         <path d="M16 8C17.1 8 18 8.9 18 10C18 11.1 17.1 12 16 12C14.9 12 14 11.1 14 10C14 8.9 14.9 8 16 8ZM16 14C18.7 14 22 15.3 22 18V20H10V18C10 15.3 13.3 14 16 14Z" fill="white"/>
                     </svg>
                     <img src="https://randomuser.me/api/portraits/men/32.jpg" class="avatar" alt="Team member 2">
                 </div>
                 
                 <div class="header-text">
                     <h1>Hello, Marina.</h1>
                     <h2>We're here to help.</h2>
                 </div>
             </div>

             <div class="first-message">
                 <div class="message-container">
                     <div class="message-header">
                         <div class="bot-avatar-small">
                             <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
                                 <path d="M16 2C8.27 2 2 8.27 2 16C2 23.73 8.27 30 16 30C23.73 30 30 23.73 30 16C30 8.27 23.73 2 16 2ZM16 7C17.66 7 19 8.34 19 10C19 11.66 17.66 13 16 13C14.34 13 13 11.66 13 10C13 8.34 14.34 7 16 7ZM22 23H10V21H11.5C12.33 21 13 20.33 13 19.5V17.5C13 15.57 14.57 14 16.5 14H17C19.21 14 21 15.79 21 18V19.5C21 20.33 21.67 21 22.5 21H24V23Z" fill="white"/>
                             </svg>
                         </div>
                         <span class="agent-name">Percy</span>
                         <span class="dot">•</span>
                         <span class="agent-type">AI Agent</span>
                     </div>
                     <div class="message-content">
                         Hi, how can I help?
                     </div>
                 </div>
             </div>

             <!-- Add input box to empty state -->
             <div class="chat-input">
                 <input type="text" id="messageInput" placeholder="Ask a question...">
                 <button id="sendMessage">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                         <path d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z" fill="white"/>
                     </svg>
                 </button>
             </div>
         </div>

         <!-- Conversation State -->
         <div class="conversation-state hidden" id="conversationState">
             <div class="chat-header">
                 <button class="back-button">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                         <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" fill="currentColor"/>
                     </svg>
                 </button>
                 <div class="header-content">
                     <div class="bot-avatar-small">
                         <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
                             <path d="M16 2C8.27 2 2 8.27 2 16C2 23.73 8.27 30 16 30C23.73 30 30 23.73 30 16C30 8.27 23.73 2 16 2ZM16 7C17.66 7 19 8.34 19 10C19 11.66 17.66 13 16 13C14.34 13 13 11.66 13 10C13 8.34 14.34 7 16 7ZM22 23H10V21H11.5C12.33 21 13 20.33 13 19.5V17.5C13 15.57 14.57 14 16.5 14H17C19.21 14 21 15.79 21 18V19.5C21 20.33 21.67 21 22.5 21H24V23Z" fill="white"/>
                         </svg>
                     </div>
                     <span class="header-title">Percy</span>
                 </div>
                 <button class="expand-button">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                         <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" fill="currentColor"/>
                     </svg>
                 </button>
             </div>

             <div class="chat-messages" id="chatMessages">
                 <!-- Inside chat-messages div, each Percy message will include quick responses -->
                 <div class="message received">
                     <div class="message-container">
                         <div class="message-header">
                             <div class="bot-avatar-small">
                                 <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
                                     <path d="M16 2C8.27 2 2 8.27 2 16C2 23.73 8.27 30 16 30C23.73 30 30 23.73 30 16C30 8.27 23.73 2 16 2ZM16 7C17.66 7 19 8.34 19 10C19 11.66 17.66 13 16 13C14.34 13 13 11.66 13 10C13 8.34 14.34 7 16 7ZM22 23H10V21H11.5C12.33 21 13 20.33 13 19.5V17.5C13 15.57 14.57 14 16.5 14H17C19.21 14 21 15.79 21 18V19.5C21 20.33 21.67 21 22.5 21H24V23Z" fill="white"/>
                                 </svg>
                             </div>
                             <span class="agent-name">Percy</span>
                             <span class="dot">•</span>
                             <span class="agent-type">AI Agent</span>
                         </div>
                         <div class="message-content">
                             Hi, how can I help?
                         </div>
                     </div>
                     <div class="quick-responses">
                         <button class="quick-response-btn">Yes, that helps!</button>
                         <button class="quick-response-btn">I need more details</button>
                         <button class="quick-response-btn">Can you explain differently?</button>
                     </div>
                 </div>
             </div>

             <!-- Add this before the chat-input div in the conversation state -->
             <div class="chat-actions">
                 <div class="action-status">
                     <svg viewBox="0 0 24 24" fill="none">
                         <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14z" fill="currentColor"/>
                         <path d="M9 8h6v2H9zm0 3h6v2H9zm0 3h6v2H9z" fill="currentColor"/>
                     </svg>
                     <span>Agent is showing content...</span>
                 </div>
             </div>

             <div class="chat-input">
                 <input type="text" id="messageInput" placeholder="Ask a question...">
                 <button id="sendMessage">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                         <path d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z" fill="white"/>
                     </svg>
                 </button>
             </div>
         </div>
     </div>
 `;

 // Create container and inject HTML
 const container = document.createElement('div');
 container.innerHTML = htmlTemplate;
 document.body.appendChild(container);

 // Initialize the chat widget (matching script.js functionality)
 function initChatWidget() {
    const chatButton = document.getElementById('chatButton');
    const chatWidget = document.getElementById('chatWidget');
    const emptyState = document.getElementById('emptyState');
    const conversationState = document.getElementById('conversationState');
    const chatMessages = document.getElementById('chatMessages');
    const firstMessage = document.querySelector('.first-message');
    const thinkingElementSelector = document.querySelector('.thinking');

    // Update these to get elements from their respective parents
    let messageInput = emptyState.querySelector('#messageInput');
    let sendMessage = emptyState.querySelector('#sendMessage');

    // Toggle chat widget
    chatButton.addEventListener('click', () => {
        chatWidget.classList.toggle('hidden');
    });

    // Close widget when clicking outside
    document.addEventListener('click', (e) => {
        if (!chatWidget.contains(e.target) && 
            !chatButton.contains(e.target) && 
            !e.target.closest('.quick-response-btn')) {
            chatWidget.classList.add('hidden');
        }
    });

    
    
    window.wsConnection.onmessage = (event) => {
        // hide start tour button
        document.querySelectorAll('.start-tour-btn').forEach(button => {
            button.style.display = 'none';
        });
        try {
            const data = JSON.parse(event.data);
            console.log('Received WebSocket message:', data);
            if (data.type === 'flow_match' && window.tourInstance) {
                // Update tour configuration
                window.tourInstance.flowConfig = data;
                const processedSteps = window.tourInstance.processSteps();
                window.tourInstance.driver.setConfig({
                    showButtons: [
                        'next',
                    ],
                    overlayColor: 'transparent',
                    animate: true,
                    opacity: 0.75,
                    padding: 5,
                    allowClose: true,
                    overlayClickNext: true,
                    clickOutsideDeactivates: false,
                    disableActiveInteraction: false,
                    doneBtnText: 'OK',
                    doneBtn: false,
                    popoverClass: 'custom-popover',
                    
                    
                    
                    // Add custom styles for the highlighted element
                    onHighlightStarted: (element) => {
                        if (element) {
                            setTimeout(() => {
                            const rect = element.getBoundingClientRect();
                            const popoverArrowRect = document.querySelector('.driver-popover-arrow').getBoundingClientRect();
                            const innerSize = 15;
                            const outerSize = 40;
                            
                            // Determine if arrow is pointing left or right
                            const arrowElement = document.querySelector('.driver-popover-arrow');
                            const  isArrowRight= arrowElement.classList.contains('driver-popover-arrow-side-left');
                            const isArrowLeft = arrowElement.classList.contains('driver-popover-arrow-side-right');
                            
                            // Adjust position based on arrow direction
                            const positionAdjustment = isArrowLeft ? -40 : isArrowRight ? 40 : 0;
                            
                            // Create outer circle with adjusted position
                            const outerCircle = document.createElement('div');
                            outerCircle.className = 'driver-highlight-circle outer-circle';
                            outerCircle.style.cssText = `
                                position: fixed;
                                top: ${rect.top + rect.height/2 - outerSize/2}px;
                                left: ${popoverArrowRect.left + positionAdjustment - outerSize/2 + popoverArrowRect.width/2}px;
                                width: ${outerSize}px;
                                height: ${outerSize}px;
                                border-radius: 50%;
                                border: 2px solid rgba(255, 92, 53, 0.5);
                                pointer-events: none;
                                z-index: 10000;
                                animation: outerRipple 1s infinite;
                            `;
                            document.body.appendChild(outerCircle);

                            // Create inner circle with adjusted position
                            const innerCircle = document.createElement('div');
                            innerCircle.className = 'driver-highlight-circle inner-circle';
                            innerCircle.style.cssText = `
                                position: fixed;
                                top: ${rect.top + rect.height/2 - innerSize/2}px;
                                left: ${popoverArrowRect.left + positionAdjustment - innerSize/2 + popoverArrowRect.width/2}px;
                                width: ${innerSize}px;
                                height: ${innerSize}px;
                                border-radius: 50%;
                                border: 3px solid #FF5C35;
                                pointer-events: none;
                                z-index: 10001;
                                animation: innerRipple 1s infinite;
                            `;
                            document.body.appendChild(innerCircle);

                            }, 100);
                        }
                    },

                    onPopoverRender: () => {
                        // add delay
                        setTimeout(() => {
                            checkStepComplete();
                        }, 2500);
                    },
                    onDestroyed: () => {
                        // remove highlight
                        const circles = document.querySelectorAll('.driver-highlight-circle');
                        const dots = document.querySelectorAll('.driver-point-dot');
                        circles.forEach(circle => circle.remove());
                        dots.forEach(dot => dot.remove());
                        console.log('onDestroyed');
                    }
                });

                function checkStepComplete(){
                    const currentStepElement =processedSteps[0].element;
                          console.log('currentStepElement', currentStepElement);
                          if (currentStepElement) {
                            console.log('data.currentStep.action', data.currentStep.action);
                            if (data.currentStep.action === 'click') {
                                // Monitor for click event
                                const clickElement = document.querySelector(currentStepElement);
                                console.log('clickElement', clickElement);
                                const clickHandler = () => {
                                    console.log('Element clicked successfully');
                                    clickElement.removeEventListener('click', clickHandler);

                                    // remove highlight
                                    const circles = document.querySelectorAll('.driver-highlight-circle');
                                    const dots = document.querySelectorAll('.driver-point-dot');
                                    circles.forEach(circle => circle.remove());
                                    dots.forEach(dot => dot.remove());

                                    //   destroy tour
                                    window.tourInstance.driver.destroy();
                                    window.wsConnection.send(JSON.stringify({
                                        type: 'stepComplete',
                                        flowId: data.flowId,
                                        stepIndex: data.currentStep.stepIndex,
                                        currentUrl: window.location.href,
                                        actionCompleted: true
                                    }));
                                };
                                clickElement.addEventListener('click', clickHandler);
                            } else if (data.currentStep.action === 'input') {
                                // Monitor for input changes and blur
                                const inputElement = document.querySelector(currentStepElement);
                                console.log('inputElement', inputElement);
                                const blurHandler = (event) => {
                                    console.log('Input blur, final value:', event.target.value);
                                    // if (event.target.value) {
                                        inputElement.removeEventListener('input', inputHandler);
                                        inputElement.removeEventListener('blur', blurHandler);

                                        // remove highlight
                                        const circles = document.querySelectorAll('.driver-highlight-circle');
                                        const dots = document.querySelectorAll('.driver-point-dot');
                                        circles.forEach(circle => circle.remove());
                                        dots.forEach(dot => dot.remove());

                                        //   destroy tour
                                        window.tourInstance.driver.destroy();
                                        window.wsConnection.send(JSON.stringify({
                                            type: 'stepComplete',
                                            flowId: data.flowId,
                                            stepIndex: data.currentStep.stepIndex,
                                            currentUrl: window.location.href,
                                            actionCompleted: true,
                                            value: event.target.value,
                                            isBlur: true
                                        }));
                                    // }
                                };

                                const inputHandler = (event) => {
                                    console.log('Input value changed:', event.target.value);
                                };

                                // Attach listeners to the input element itself
                                inputElement.addEventListener('blur', blurHandler);
                                inputElement.addEventListener('input', inputHandler);
                            }
                          }
                          

                          // Only send immediate stepComplete if no action is required
                          if (!data.currentStep.action) {
                              setTimeout(() => {
                                // remove highlight
                                const circles = document.querySelectorAll('.driver-highlight-circle');
                                const dots = document.querySelectorAll('.driver-point-dot');
                                circles.forEach(circle => circle.remove());
                                dots.forEach(dot => dot.remove());


                                //   destroy tour
                                window.tourInstance.driver.destroy();
                                window.wsConnection.send(JSON.stringify({
                                    type: 'stepComplete',
                                    flowId: data.flowId,
                                    stepIndex: data.currentStep.stepIndex,
                                    currentUrl: window.location.href,
                                    actionCompleted: false
                                }));
                              }, 5000);
                          }

                        
                }
                window.tourInstance.driver.setSteps(processedSteps);
                console.log('Tour configuration updated');
                if(data.currentStep.stepIndex === 0) {
                    // Add response
                    const thinkingElement = document.querySelector('.thinking');
                    if(thinkingElement) {
                        chatMessages.removeChild(thinkingElement);
                    }
                    const responseElement = document.createElement('div');
                    responseElement.className = 'thinking';
                    responseElement.innerHTML = `
                        <div class="message-container">
                            <div class="message-header">
                                <div class="bot-avatar-small">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="white"/>
                                    </svg>
                                </div>
                                <span class="agent-name">Percy</span>
                                <span class="dot">•</span>
                                <span class="agent-type">AI Agent</span>
                            </div>
                            <div class="message-content">
                                I'll help you with that question about API calls. Our standard plan includes 100,000 API calls per month.
                            </div>
                        </div>
                        <div class="quick-responses">
                            <button  class="start-tour-btn">Start Tour</button>
                        </div>
                    `;
                    chatMessages.appendChild(responseElement);
                    
                    // Attach handlers to new quick response buttons
                    attachQuickResponseHandlers();
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                    
                }else{
                    window.tourInstance.driver.drive();
                }
            }
        } catch (error) {
            console.error('Error processing WebSocket message:', error);
        }
    };

    // Show first message on load
    setTimeout(() => {
        firstMessage.classList.add('visible');
    }, 500);

    // Update the sendMessageHandler to use the correct input field
    function sendMessageHandler() {
        // Get the active input field based on which state is visible
        messageInput = emptyState.classList.contains('hidden') 
            ? conversationState.querySelector('.chat-input input')
            : emptyState.querySelector('.chat-input input');
        
        sendMessage = emptyState.classList.contains('hidden')
            ? conversationState.querySelector('.chat-input button')
            : emptyState.querySelector('.chat-input button');
        
        const message = messageInput.value.trim();
        console.log('message', message);
        if (message) {
            // Remove any existing quick responses
            document.querySelectorAll('.quick-responses').forEach(el => {
                el.remove();
            });

            // Switch to conversation state if in empty state
            if (!emptyState.classList.contains('hidden')) {
                emptyState.classList.add('hidden');
                conversationState.classList.remove('hidden');
            }

            // Add user message to chat
            const messageElement = document.createElement('div');
            messageElement.className = 'message sent';
            messageElement.innerHTML = `
                <div class="message-container">
                    <div class="message-content">
                        ${message}
                    </div>
                </div>
            `;
            chatMessages.appendChild(messageElement);

            window.wsConnection.send(JSON.stringify({
                type: 'query',
                message: message,
                currentUrl: window.location.href
            }))
            

            // Clear input and scroll
            messageInput.value = '';
            chatMessages.scrollTop = chatMessages.scrollHeight;

            // Add thinking indicator
            const thinkingElement = document.createElement('div');
            thinkingElement.className = 'message received thinking';
            thinkingElement.innerHTML = `
                <div class="message-container">
                    <div class="message-header">
                        <div class="bot-avatar-small">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="white"/>
                            </svg>
                        </div>
                        <span class="agent-name">Percy</span>
                        <span class="dot">•</span>
                        <span class="agent-type">AI Agent</span>
                    </div>
                    <div class="message-content">
                        <div class="thinking-indicator">
                            <div class="thinking-dot"></div>
                            <div class="thinking-dot"></div>
                            <div class="thinking-dot"></div>
                        </div>
                    </div>
                </div>
            `;
            chatMessages.appendChild(thinkingElement);
            chatMessages.scrollTop = chatMessages.scrollHeight;

            // Simulate AI response after thinking
            // setTimeout(() => {
            //     // Remove thinking indicator
            //     chatMessages.removeChild(thinkingElement);
                
                
            // }, 2000);
        }
    }

    // Update event listeners to work with both states
    document.querySelectorAll('.chat-input button').forEach(button => {
        button.addEventListener('click', sendMessageHandler);
    });

    document.querySelectorAll('.chat-input input').forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessageHandler();
            }
        });
    });

    // Add back button functionality
    document.querySelector('.back-button').addEventListener('click', () => {
        chatWidget.classList.add('hidden');
    });

    // Update the quick response button click handlers
    function attachQuickResponseHandlers() {
        document.querySelectorAll('.quick-response-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                const message = button.textContent;
                messageInput.value = message;
                sendMessageHandler();
            });
        });
        document.querySelectorAll('.start-tour-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                window.tourInstance.driver.drive();
                // hide start tour button
                document.querySelectorAll('.start-tour-btn').forEach(button => {
                    button.style.display = 'none';
                });
                // click chat button
                chatButton.click();
            });
        });
    }

    // Initial attachment of handlers
    // attachQuickResponseHandlers();
}
    
    // Load Driver.js resources
    function loadDriverResources() {
        return new Promise((resolve, reject) => {
            const css = document.createElement('link');
            css.rel = 'stylesheet';
            css.href = 'https://cdn.jsdelivr.net/npm/driver.js@latest/dist/driver.css';
            document.head.appendChild(css);

            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/driver.js@latest/dist/driver.js.iife.js';
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    // Add WebSocket connection setup
    function setupWebSocket() {
        console.log('setupWebSocket');
        // Use secure WebSocket in production, regular in development
        const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
        // const ws = new WebSocket(`${protocol}//5532-49-47-195-218.ngrok-free.app:3001`);
        const ws = new WebSocket(`https://5532-49-47-195-218.ngrok-free.app`);
        ws.onopen = () => {
            console.log('WebSocket connected');
        };

        // ws.onmessage = (event) => {
            
        // };

        ws.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        ws.onclose = () => {
            console.log('WebSocket disconnected');
            // Optionally implement reconnection logic
            setTimeout(setupWebSocket, 5000);
        };

        return ws;
    }
    

    // Initialize everything
    async function initTour() {
        
        try {

            await loadDriverResources();
            console.log('Driver.js resources loaded successfully');

            // Initialize WebSocket connection
             window.wsConnection = setupWebSocket();

             initChatWidget();

            class FeatureTour {
                constructor(flowConfig) {
                    this.driver = window.driver.js.driver({
                        
                        
                    });
                    this.flowConfig = flowConfig;
                }

                getLocatorByName(element){
                    const selector = `${element.tagName}[name="${element.name}"]`
                    return selector;
                }

                getLocatorByTextContent(element) {
                    // Create a selector that matches the tag and exact text content
                    return `${element.tagName.toLowerCase()}:contains("${element.textContent}")`;
                }

                // Add this new helper method to find elements by text content
                findElementByText(selector, text) {
                    const elements = document.querySelectorAll(selector);
                    const matchingElements = Array.from(elements).filter(element => 
                        element.textContent.trim() === text.trim()
                    );

                    // If there's only one match, return it
                    if (matchingElements.length === 1) {
                        return matchingElements[0];
                    }
                    
                    // If multiple matches found, try to find the most specific match
                    if (matchingElements.length > 1) {
                        // Check if currentStep has additional identifiers
                        const currentStep = this.flowConfig.currentStep;
                        if (currentStep && currentStep.element) {
                            // Try matching by xpath if provided
                            if (currentStep.element.xpath) {
                                const xpathElement = document.evaluate(
                                    currentStep.element.xpath,
                                    document,
                                    null,
                                    XPathResult.FIRST_ORDERED_NODE_TYPE,
                                    null
                                ).singleNodeValue;
                                if (xpathElement) {
                                    return xpathElement;
                                }
                            }
                            
                            // Try matching by className if provided
                            if (currentStep.element.className) {
                                return matchingElements.find(el => 
                                    el.className === currentStep.element.className
                                );
                            }
                        }
                        
                        // If no specific matcher found, return the first visible element
                        return matchingElements.find(el => {
                            const style = window.getComputedStyle(el);
                            return style.display !== 'none' && style.visibility !== 'hidden';
                        }) || matchingElements[0];
                    }
                    
                    return null;
                }

                processSteps() {
                    const currentStep = this.flowConfig.currentStep;
                    if (currentStep && currentStep.element) {
                        let selector;
                        if(currentStep.action === 'click') {
                            // Find button by tag and text content
                            const buttonSelector = currentStep.element.tagName.toLowerCase();
                            const targetElement = this.findElementByText(buttonSelector, currentStep.element.textContent);
                            // Add a unique identifier to the found element
                            if (targetElement) {
                                const uniqueId = 'tour-' + Math.random().toString(36).substr(2, 9);
                                targetElement.setAttribute('data-tour-id', uniqueId);
                                selector = `[data-tour-id="${uniqueId}"]`;
                            }
                        } else if(currentStep.element.tagName.toLowerCase() === 'input' || 
                                currentStep.element.tagName.toLowerCase() === 'textarea') {
                            selector = this.getLocatorByName(currentStep.element);
                        } else if(currentStep.element.tagName.toLowerCase() === 'select') {
                            if (currentStep.element.xpath) {
                                // First try to find the element using XPath
                                const element = document.evaluate(
                                    currentStep.element.xpath,
                                    document,
                                    null,
                                    XPathResult.FIRST_ORDERED_NODE_TYPE,
                                    null
                                ).singleNodeValue;
                                
                                if (element) {
                                    // Add a unique data attribute to the element
                                    const uniqueId = 'tour-' + Math.random().toString(36).substr(2, 9);
                                    element.setAttribute('data-tour-id', uniqueId);
                                    selector = `[data-tour-id="${uniqueId}"]`;
                                } else {
                                    // Fallback to other selectors if XPath doesn't find the element
                                    if (currentStep.element.name) {
                                        selector = this.getLocatorByName(currentStep.element);
                                    } else if (currentStep.element.className) {
                                        selector = `select.${currentStep.element.className.split(' ')[0]}`;
                                    } else {
                                        selector = 'select';
                                    }
                                }
                            }
                        }
                        
                        return [{
                            element: selector,
                            popover: currentStep.popover
                        }];
                    }
                    return [];
                }

                createSelector(elementData) {
                    // If XPath is available, prioritize using it for selection
                    if (elementData.xpath) {
                        // First try to find the element using XPath
                        const element = document.evaluate(
                            elementData.xpath,
                            document,
                            null,
                            XPathResult.FIRST_ORDERED_NODE_TYPE,
                            null
                        ).singleNodeValue;
                        
                        if (element) {
                            // Add a unique data attribute to the element
                            const uniqueId = 'tour-' + Math.random().toString(36).substr(2, 9);
                            element.setAttribute('data-tour-id', uniqueId);
                            return `[data-tour-id="${uniqueId}"]`;
                        }
                    }

                    // Fallback to building selector from other properties if XPath fails
                    let selector = '';

                    if (elementData.tagName) {
                        selector = elementData.tagName.toLowerCase();
                    }

                    if (elementData.className) {
                        const firstClass = elementData.className.split(' ')[0];
                        selector += '.' + firstClass;
                    }

                    if (elementData.textContent) {
                        selector += `[data-tour-text="${elementData.textContent}"]`;
                    }

                    return selector;
                }

            }
            const tour = new FeatureTour();
                       
            // Add to window object for external access if needed
            window.FeatureTour = FeatureTour;
            window.tourInstance = tour;

            console.log('Tour initialized successfully');

        } catch (error) {
            console.error('Failed to initialize tour:', error);
        }
    }

    // Start the initialization when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTour);
    } else {
        initTour();
    }

    // Add these styles to the document
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        @keyframes innerRipple {
            0% {
                transform: scale(0.25);
                opacity: 1;
            }
            100% {
                transform: scale(1);
                opacity: 1;
            }
        }

        @keyframes outerRipple {
            0% {
                transform: scale(0.25);
                opacity: 1;
            }
            100% {
                transform: scale(1);
                opacity: 0;
            }
        }


        .driver-highlight-circle.inner-circle {
            box-shadow: 0 0 10px rgba(255, 92, 53, 0.3);
        }

        .driver-highlight-circle.outer-circle {
            animation: outerRipple 1s infinite ease-out;
        }

        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(styleSheet);
})(); 