from rembg import remove
import easygui
from PIL import Image

input=easygui.fileopenbox(title='save')
outputpath=easygui.filesavebox(title='save to')
input=Image.open(input)
output= remove(input)
output.save(outputpath)